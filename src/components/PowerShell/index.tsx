import { IconButton, Tooltip } from '@material-tailwind/react';
import { useAlert } from '@/hooks/useAlert';
import { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa6';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ICodeExample {
  command: string;
}
export const PowerShell = ({ command }: ICodeExample) => {
  const [codeCopied, setCodeCopied] = useState(false);
  const { showAlert } = useAlert();
  const copyCodeSnippet = () => {
    navigator.clipboard.writeText(command);
    setCodeCopied(true);
    showAlert({ message: 'Command copied' });
  };

  const tooltipText = codeCopied ? 'Copy again' : 'Copy command snippet';
  return (
    <div className="bg-[#282A36] p-2 rounded-md">
      <SyntaxHighlighter language="powershell" style={dracula}>
        {`PS: C:/projects/MySite> ${command}`}
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
