import { useState } from "react";
import InputWithTags from "./lib/InputWithTags";

function App() {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Tag Input Demo</h1>
      <InputWithTags
        name="tags"
        label="Tags"
        value={tags}
        onChange={setTags}
        required
        validate={(tags) =>
          tags.some((tag) => tag.length < 2)
            ? "Tags must be at least 2 characters."
            : null
        }
      />
    </div>
  );
}

export default App;
