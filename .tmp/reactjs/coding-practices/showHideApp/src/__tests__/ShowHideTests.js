import * as csstree from 'css-tree'
import * as fs from 'fs'
import path from 'path'

import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../App'

const cssCode = fs.readFileSync(
  path.resolve(__dirname, '../components/ShowHide/index.css'),
  'utf8',
)

describe(':::RJSCP8DO88_TEST_SUITE_1:::Show/Hide App tests', () => {
  it(':::RJSCP8DO88_TEST_1:::Page should initially consist of HTML button element with text content as "Show/Hide Firstname":::5:::', () => {
    render(<App />)
    expect(
      screen.getByRole('button', {name: /Show\/Hide Firstname/i}),
    ).toBeInTheDocument()
  })

  it(':::RJSCP8DO88_TEST_2:::Page should initially consist of HTML button element with text content as "Show/Hide Lastname":::5:::', () => {
    render(<App />)
    expect(
      screen.getByRole('button', {name: /Show\/Hide Lastname/i}),
    ).toBeInTheDocument()
  })

  it(':::RJSCP8DO88_TEST_3:::CSS code implementation should not contain "display" property with value "none":::5:::', () => {
    render(<App />)
    const ast = csstree.parse(cssCode)
    const displayDeclarations = csstree.findAll(
      ast,
      node => node.type === 'Declaration' && node.property === 'display',
    )
    const displayNoneEl = displayDeclarations.some(
      decl => csstree.generate(decl) === 'display:none',
    )
    expect(displayNoneEl).toBeFalsy()
  })

  it(':::RJSCP8DO88_TEST_4:::When the "Show/Hide Firstname" button is clicked, then an HTML paragraph element with text content as "Joe" should be displayed:::5:::', () => {
    render(<App />)
    const firstNameButton = screen.getByRole('button', {
      name: /Show\/Hide Firstname/i,
    })
    expect(firstNameButton).toBeInTheDocument()
    userEvent.click(firstNameButton)
    const paragraphEl = screen.getByText(/Joe/i)
    expect(paragraphEl).toBeInTheDocument()
    expect(paragraphEl.tagName).toBe('P')
  })

  it(':::RJSCP8DO88_TEST_5:::When the text content "Joe" is displayed and the "Show/Hide Firstname" button is clicked, then the HTML paragraph element with text content "Joe" should not be displayed:::5:::', () => {
    render(<App />)
    const firstNameButton = screen.getByRole('button', {
      name: /Show\/Hide Firstname/i,
    })
    expect(firstNameButton).toBeInTheDocument()
    userEvent.click(firstNameButton)
    expect(screen.getByText(/Joe/i)).toBeInTheDocument()
    userEvent.click(firstNameButton)
    expect(screen.queryByText(/Joe/i)).not.toBeInTheDocument()
  })

  it(':::RJSCP8DO88_TEST_6:::When the "Show/Hide Lastname" button is clicked, then an HTML paragraph element with text content as "Jonas" should be displayed:::5:::', () => {
    render(<App />)
    const lastNameButton = screen.getByRole('button', {
      name: /Show\/Hide Lastname/i,
    })
    expect(lastNameButton).toBeInTheDocument()
    userEvent.click(lastNameButton)
    const paragraphEl = screen.getByText(/Jonas/i)
    expect(paragraphEl).toBeInTheDocument()
    expect(paragraphEl.tagName).toBe('P')
  })

  it(':::RJSCP8DO88_TEST_7:::When the text content "Jonas" is displayed and the "Show/Hide Lastname" button is clicked, then the HTML paragraph element with text content "Jonas" should not be displayed:::5:::', () => {
    render(<App />)
    const lastNameButton = screen.getByRole('button', {
      name: /Show\/Hide Lastname/i,
    })
    expect(lastNameButton).toBeInTheDocument()
    userEvent.click(lastNameButton)
    expect(screen.getByText(/Jonas/i)).toBeInTheDocument()
    userEvent.click(lastNameButton)
    expect(screen.queryByText(/Jonas/i)).not.toBeInTheDocument()
  })
})
