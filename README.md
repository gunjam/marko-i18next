# i18next Marko tag lib

This tag lib allows you to access the i18next `t()` function from your request
object (if for example you're using i18next Express middleware) in your
templates if streaming to a response using the `template.render()` function:

```javascript
template.render({}, res);
```

## Installing

```bash
npm install marko-i18next
```

## Usage

Example locales file (`namespace.json`):

```json
{
  "message": "Hi guys",
  "interpolatedMessage": "Hi {{name}}",
  "submit": "Submit form",
  "nameSubmit": "Submit form for {{name}}"
}
```

### `<i18n-message/>` component

In a Marko template:

```marko
<p>
  <i18n-message key="namespace:message"/>
</p>
```

With interpolated strings:

```marko
<p>
  <i18n-message key="namespace:interpolatedMessage" name="Hammond Eggs"/>
</p>
```

### `<i18n-var/>` compile time variable

You can also add the translation function to your template by including
`<i18n-var/>` at the top of the file. This is useful for assigning i18n
messages to attributes:

```marko
<i18n-var/>

<form>
  ...
  <input type="submit" value=i18n('namespace:submit')/>
</input>
```

With interpolated strings:

```marko
<i18n-var/>

<form>
  ...
  <input type="submit" value=i18n('namespace:nameSubmit', {name: 'George'})/>
</input>
```

## Contributing

Do a pull request, I'll have a look!
