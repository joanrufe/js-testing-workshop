import * as templates from './templates'

/**
 * This renderer route will try to call templateName(settings) where templateName is a module inside "templates" folder
 * @param templateName String
 * @param settings Object 
 */
export default (templateName, settings) => {
  if (!templateName) throw new Error('No template provided')
  if(templates[templateName]){
    return templates[templateName](settings)
  }
}