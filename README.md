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

Then restart Pi or run `/reload`. Verify with `/hello`.

## Develop

```bash
npm install
npm run typecheck
pi --extension ./extensions/hello.ts
```

Add new extensions under `extensions/` as `*.ts` files (or `name/index.ts`). They are picked up by the `pi.extensions` glob in `package.json`.
