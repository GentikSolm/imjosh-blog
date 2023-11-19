export interface PublishParams {
  event: string;
  email: string;
  subscribed?: boolean;
  data?: Record<string, string> | { persistent: boolean; value: string  };
}

export interface SendParams {
  to: string | string[];
  subject: string;
  body: string;
  type?: "html" | "markdown";
  from?: string;
  name?: string;
  subscribed?: boolean;
}

export class Plunk {
  private readonly key: string;

  private async fetch<T>({
    json,
    url,
    ...options
  }: RequestInit & {
    url: string;
    json?: object;
    headers?: Record<string, string>;
  }) {
    const res = await fetch(
      new URL(url, "https://api.useplunk.com/v1/").toString(),
      {
        ...options,
        headers: {
          Authorization: `Bearer ${this.key}`,
          ...(json && { "Content-Type": "application/json" }),
          ...options.headers,
        },
        body: json ? JSON.stringify(json) : undefined,
      }
    );

    const text = await res.text();

    const data = safeJsonParse(text) as {message: string};

    if (res?.status === 401) {
      throw new Error("Bad Token?")
    }

    if (res?.status === 404) {
      throw new Error("Endpoint Not Found");
    }

    if (!res.ok) {
      throw new Error(data.message ?? "Unknown API Error");
    }
    return data as T;
  }

  constructor(key: string) {
    this.key = key;
  }

  events = {
    track: async (event: PublishParams) => {
      return await this.fetch<{
        success: true;
      }>({
        method: "POST",
        url: "track",
        json: { ...event },
      });
    },
  };

  emails = {
    send: async (body: SendParams) => {
      return await this.fetch<{
        success: true;
      }>({
        method: "POST",
        url: "send",
        json: {
          ...body,
        },
      });
    },
  };
}

function safeJsonParse(text: string) {
  try {
    return JSON.parse(text) as unknown;
  } catch (e) {
    return text;
  }
}
