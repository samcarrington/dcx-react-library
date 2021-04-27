import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Button } from '../../src/button/Button';
import './style.css';

const ButtonDemo = `
function ButtonDemo() {
  // feel free to use style or classNames  
  const style = {
    backgroundColor: '#0070ad',
    color: 'white',
    border: 0,
    padding: '6px',
    width: '80px',
    height: '33px',
    borderRadius: '3px',
    cursor: 'pointer'
  }
  const [isLoading, setIsLoading] = React.useState(false)
  const handleClick = (evt) => {
    setTimeout(() => {setIsLoading(true)}, 1000)
  }
  return (
    <Button 
        label="submit"
        disabled={false} 
        onClick={handleClick}
        ariaLabel='' 
        disableClickForMs={0} 
        customPostfixImg={<></>} 
        customPrefixImg={<></>} 
        isLoading={isLoading} 
        loadingLabel="saving..." 
        customLoadingPreImage={<></>} 
        customLoadingPostImage={<></>}
        className=""
        style={style}
    />
  )
}
`.trim();

const ButtonLive = () => {
  const scope = { Button };
  return (
    <LiveProvider code={ButtonDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" />
        <LivePreview className="livePreview" />
      </div>
      <LiveError className="liveError" />
    </LiveProvider>
  );
};

export default ButtonLive;
