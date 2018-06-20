import * as templates from './templates'
import htmlTagValidator from 'html-tag-validator'

describe('Render System',()=>{
  it('All templates should render with default values', () =>{
    // Convert templates Object into Array
    const tplArrayFns = Object.keys(templates).map(tplName => templates[tplName])

    // Validate each template
    tplArrayFns.map( tplFn => validateTemplate(tplFn()) )
  })
})

function validateTemplate(html){
  let validHTML, error

  try{
    validHTML = htmlTagValidator(html)
  }catch(err){
    error = err
  }
  
  expect(error).toBe(undefined)
  expect(validHTML.document).not.toBe(undefined)
  expect(typeof html).toBe('string')
}