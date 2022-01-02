import handlebars from 'handlebars';
import fs from 'fs';

class HandlebarsMailTemplateProvider {
  public async parse({
    file,
    variables,
  }: any) {
    const templateFileContent = await fs.promises.readFile(file, {
      encoding: 'utf8',
    });
    const parseTemplate = handlebars.compile(templateFileContent);
    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplateProvider;
