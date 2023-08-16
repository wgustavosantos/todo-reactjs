
import './App.css'
import BackgroundImage from './componentes/BackgroundImage/BackgroundImage'
import TodoForm from './componentes/TodoForm/TodoForm'
import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

function App() {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    // Mostrar o aviso após 3 segundos (3000 milissegundos)
    setTimeout(() => {
      setShowNotice(true);
    }, 1000);
  }, []);

  useEffect(() => {
    // Remover o aviso após 3 segundos (3000 milissegundos)
    setTimeout(() => {
      setShowNotice(false);
    }, 3000);
  }, [showNotice]);


  const handleExit = () => {
    setShowNotice(false);
  };
  
  return (
    <div className='app'>
      <BackgroundImage />
      <TodoForm />
      <CSSTransition
        in={showNotice}
        timeout={500}
        classNames={{
          enter: 'notice-enter',
          enterActive: 'notice-enter-active',
          exit: 'notice-exit',
          exitActive: 'notice-exit-active',
        }}
        unmountOnExit
        onExited={handleExit}
      >
        <div className='notice' onClick={()=>setShowNotice(false)}>
          Arraste e solte os itens para reordenar a lista.
        </div>
      </CSSTransition>
    </div>

  )
}

export default App
