import { Link } from '@mui/material'
import { useState } from 'react'
import type { ReactElement } from 'react'

import type { Message } from '@/store/msgsSlice'

import css from './styles.module.css'

const Msg = ({ message }: { message: Message['message'] }): ReactElement => {
  const [showMsg, setShowMsg] = useState(true)

  const handleToggleMsg = () => {
    setShowMsg((prev) => !prev)
  }

  if (typeof message === 'string') {
    return <>{message}</>
  }

  return (
    <div>
      {showMsg && (
        <pre style={{ margin: 0 }}>
          <code>{JSON.stringify(message, null, 2)}</code>
        </pre>
      )}
      <Link component="button" onClick={handleToggleMsg} fontSize="medium" className={css.toggle}>
        {showMsg ? 'Hide' : 'Show'}
      </Link>
    </div>
  )
}

export default Msg