import { IconButton, Tooltip } from '@material-tailwind/react';
import { useAlert } from '@/hooks/useAlert';
import { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa6';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ICodeExample {
  code: string;
}
export const CodeExample = ({ code }: ICodeExample) => {
  const [codeCopied, setCodeCopied] = useState(false);
  const { showAlert } = useAlert();
  const copyCodeSnippet = () => {
    navigator.clipboard.writeText(code);
    setCodeCopied(true);
    showAlert({ message: 'Code copied' });
  };

  const tooltipText = codeCopied ? 'Copy again' : 'Copy code snippet';


  return (
    <div className="bg-[#282A36] p-2 rounded-md">
      <SyntaxHighlighter language="javascript" style={dracula}>
        {code}
      </SyntaxHighlighter>
      <div className="w-full flex justify-end">
        <Tooltip content={tooltipText} placement="top">
          <IconButton
            className="bg-transparent shadow-none hover:scale-110 ease-in-out duration-500"
            onClick={copyCodeSnippet}
          >
            <FaRegCopy style={{ color: codeCopied ? 'gray' : 'white' }} size={20} />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};
