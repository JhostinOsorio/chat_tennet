# Chat Tennet

Este es un ejemplo de como iniciar el componente:

~~~

import { useState } from 'react'
import { ChatTennet } from 'ChatTennet/index.tsx';
import 'ChatTennet/tennet.css'

const initialTennetData = {
  id: '',
  name: '',
  email: '',
  extraCodeCourse: ''
}

const App = () => {

  const [ tennetData, setTennetData ] = useState(initialTennetData)

  const execute = () => {
    if (tennetData.id) {
      setTennetData(initialTennetData)
    } else {
      setTennetData({
        id: 'xxx',
        name: 'xxx',
        email: 'xxx@xxx.com',
        extraCodeCourse: 'xxxx'
      })
    }
  }

  return (
    <div className="App">
      <button className='btn-local' onClick={execute}>
        { tennetData.id ? 'Remover' : 'Mostrar' } Chat
      </button>
      {
        tennetData.extraCodeCourse && (
          <ChatTennet
            id={tennetData.id}
            name={tennetData.name}
            email={tennetData.email}
            extraCodeCourse={tennetData.extraCodeCourse}
            textButton='Chatea con tu docente'
            textWindowHeader='Chatea con tu docente'
            time={1000}
          />
        )
      }
    </div>
  );
}

export default App;

~~~
