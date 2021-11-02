import logo from './logo.svg';
import { Editor, Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import './App.css';

import { createRef, useEffect, useState } from 'react';
import Test from './Test';
import test from './test.json';

function App() {
  const editorRef = createRef();
  const [active, setActive] = useState(0);

  const handleClick = () => {
    console.log({ stringnya: editorRef?.current?.getInstance().getMarkdown() });
    return editorRef?.current?.getInstance().getMarkdown();
  };
  const [data, setData] = useState(test.content);

  useEffect(() => {
    editorRef?.current?.getInstance().setMarkdown(data);
  }, [data]);

  return (
    <div className='App'>
      <div style={{ display: 'flex' }}>
        <button onClick={() => setActive(0)}>Viewer</button>
        <button onClick={() => setActive(1)}>Editor</button>
      </div>
      <header className='App-header' style={{ textAlign: 'left' }}>
        <div style={{ background: 'white' }} className='customEditor'>
          {active !== 0 ? (
            <>
              <Editor
                initialValue={data}
                previewStyle='vertical'
                height='600px'
                initialEditType='markdown'
                useCommandShortcut={true}
                ref={editorRef}
              />
              <button onClick={() => setData(handleClick())}>
                Get Markdown
              </button>
            </>
          ) : (
            <Test content={data} />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
