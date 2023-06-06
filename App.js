import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw';

export default function App() {

  const input = `<div> Some *emphasis* and <strong>strong</strong>! </div>`

  return (
    <div>
      <ReactMarkdown># Heading 1</ReactMarkdown>
      <ReactMarkdown>## Heading 2</ReactMarkdown>
      <ReactMarkdown>### Heading 3</ReactMarkdown>
      <ReactMarkdown>#### Heading 4</ReactMarkdown>
      <ReactMarkdown>##### Heading 5</ReactMarkdown>
      <ReactMarkdown>###### Heading 6</ReactMarkdown>

      <ReactMarkdown>- Milk</ReactMarkdown>
      <ReactMarkdown>- Apples</ReactMarkdown>
      <ReactMarkdown>- Eggs</ReactMarkdown>
      <ReactMarkdown>- Bread</ReactMarkdown>

      <ReactMarkdown>1. Milk</ReactMarkdown>
      <ReactMarkdown>2. Apples</ReactMarkdown>
      <ReactMarkdown>3. Eggs</ReactMarkdown>
      <ReactMarkdown>4. Bread</ReactMarkdown>
    
      <ReactMarkdown>**Bold Text**</ReactMarkdown>
      <ReactMarkdown>*Italic Text*</ReactMarkdown>

      <ReactMarkdown>[Airplane](https://www.airplane.dev/)</ReactMarkdown>

      <ReactMarkdown>![Stock image](https://i.imgur.com/zOGQAQm.jpg)</ReactMarkdown>

      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        ~~Strikethrough~~
      </ReactMarkdown>

      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={input} />

    </div>
  )
}
