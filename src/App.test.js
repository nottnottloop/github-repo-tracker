import { render, screen } from '@testing-library/react'; {/* Note this is a named imports */}
//import userEvent from '@testing-library/user-event'; {/* Note this is not a named import */}
import App from '../App.js'

describe('App',()=>{
    beforeEach(() => {
        render(<App />)
    })
    test("clears user input after submission", () => {
        const nameInput = screen.getByLabelText('Username')
        userEvent.type(nameInput, "Beth{enter}")
        expect(nameInput.value).toBe("");
      });
})
test('test',()=>{
    expect(true).toBe(true)
  })