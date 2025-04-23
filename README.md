# 🎯 InputWithTags

A fully-featured, reusable **React input with tags** component built with TypeScript and Vite. Allows users to add tags, remove them, and supports validation, blur handling, keyboard events, and custom styles.

---

## ✨ Features

- ✅ Add / remove tags
- ✅ Blur and touched validation
- ✅ Keyboard support (Enter / Backspace)
- ✅ Optional validation function
- ✅ Max tags limit
- ✅ Custom close icon (`crossIcon`)
- ✅ TypeScript typed props
- ✅ Built with Vite — fast and lightweight

---

## 📦 Installation

```bash
npm install input-with-tags
```

## 🧪 Usage

```
import { useState } from 'react';
import { InputWithTags } from 'input-with-tags';
import 'input-with-tags/dist/index.css'; // Required CSS

const App = () => {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <InputWithTags
      name="tags"
      label="Enter Tags"
      value={tags}
      onChange={setTags}
      required
      validate={(tags) =>
        tags.length < 1 ? 'At least one tag is required' : null
      }
    />
  );
};
```

## 📚 Props

| Prop          | Type                                 | Default          | Description                                                |
| ------------- | ------------------------------------ | ---------------- | ---------------------------------------------------------- |
| `name`        | `string`                             | _required_       | Input field name                                           |
| `label`       | `string`                             | `-`              | Optional label text                                        |
| `placeholder` | `string`                             | `'Add a tag...'` | Input placeholder                                          |
| `value`       | `string[]`                           | _required_       | Tags array                                                 |
| `onChange`    | `(tags: string[]) => void`           | _required_       | Callback when tag list changes                             |
| `onBlur`      | `() => void`                         | `-`              | Optional blur handler                                      |
| `validate`    | `(tags: string[]) => string \| null` | `() => null`     | Custom validation function — return error string or `null` |
| `required`    | `boolean`                            | `false`          | Show error if no tags are present                          |
| `maxTags`     | `number`                             | `10`             | Maximum number of tags allowed                             |
| `className`   | `string`                             | `''`             | Add a custom class to the wrapper                          |
| `crossIcon`   | `React.ReactNode`                    | `'×'`            | Optional icon to remove tags (default is ×)                |
