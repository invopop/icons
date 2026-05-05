# Invopop Icons

Default set of icons used inside Invopop.

## Build

### Go

Simply call the following after the list of icons has been modified:

```bash
go generate .
```

Upload generated code to the repository to ensure it can be used directly by Go.

### Svelte

The icons are automatically built and published to npm when changes are pushed to the `themes/` folder.

To preview the icons locally, you can `npm run build:icons` and then `netlify dev` to open a preview server.

#### Installation

```bash
npm install @invopop/ui-icons @steeze-ui/svelte-icon
```

#### Usage

```svelte
<script>
  import { Icon } from "@steeze-ui/svelte-icon";
  import { AddCircle, Alert, Calendar } from "@invopop/ui-icons";
</script>

<Icon src={AddCircle} />
<Icon src={Alert} size="24" />
<Icon src={Calendar} theme="solid" />
```
