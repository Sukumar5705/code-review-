import './App.css'
import 'prismjs/themes/prism-tomorrow.css'
import Editor from 'react-simple-code-editor'
import axios from 'axios'
import Prism from 'prismjs'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useEffect, useState } from 'react'

function App() {
  const [review, setReview] = useState('')
  const [code, setCode] = useState(`/**
 * Calculates the sum of an arbitrary number of numeric arguments.
 * @param {...number} numbers - The numbers to sum.
 * @returns {number} The total sum.
 */
function sum(...numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}`)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  async function getReview() {
    setIsLoading(true)
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code })
      setReview(response.data)
    } catch (error) {
      setReview('Error fetching review: ' + error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => Prism.highlight(code, Prism.languages.javascript, 'javascript')}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira mono", monospace',
              border: '1px solid #ddd',
              fontSize: 16,
              borderRadius: '0.7rem',
              height: '100%',
              width: '100%',
            }}
          />
          <div 
            className={`review-button ${isLoading ? 'loading' : ''}`} 
            onClick={getReview}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Review'}<div> <input type="file"/>        </div>
          </div>
          

        </div>
      </div>
      <div className="right">
        {isLoading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        ) : (
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({  inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <pre className={className}>
                    <code
                      dangerouslySetInnerHTML={{
                        __html: Prism.highlight(
                          String(children).replace(/\n$/, ''),
                          Prism.languages[match[1]],
                          match[1]
                        ),
                      }}
                      {...props}
                    />
                  </pre>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
          >
            {review}
          </Markdown>
        )}
      </div>
    </main>
  )
}

export default App