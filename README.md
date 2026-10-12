# pi-extensions
My personal collections of [Pi](https://pi.dev/) extensions. Compatibility not guaranteed. Use at your own risk.

## Install

```bash
pi install git:github.com/zheli/pi-extensions
```

Or add to `~/.pi/agent/settings.json`:

```json
{
  "packages": ["git:github.com/zheli/pi-extensions"]
}
```

Then restart Pi or run `/reload`. Verify with `/hello`. Installing this package also loads the vendored `ask_user_question` tool from `packages/rpiv-ask-user-question` (upstream [`@juicesharp/rpiv-ask-user-question`](https://github.com/juicesharp/rpiv-mono/tree/main/packages/rpiv-ask-user-question)).

## Packages

| Path | What it adds |
| --- | --- |
| `extensions/hello.ts` | `/hello` command |
| `packages/rpiv-ask-user-question` | `ask_user_question` structured questionnaire tool |

## Develop

```bash
npm install
npm run typecheck
pi --extension ./extensions/hello.ts
```

Add new extensions under `extensions/` as `*.ts` files (or `name/index.ts`). They are picked up by the `pi.extensions` glob in `package.json`. Larger vendored packages live under `packages/` and are listed explicitly in `pi.extensions`.
