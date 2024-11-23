import { Injectable } from '@angular/core';
import { InterfaceModel } from '../model/interface-model';

@Injectable({
  providedIn: 'root'
})
export class JsonConverterService {

  constructor() { }

  convertJsonToInterface(jsonToConvert: string, mainInterfaceName: string): Array<any> {
    const json: any = JSON.parse(jsonToConvert);
    let interfaces: Array<InterfaceModel> = [];
    this.buildInterface(json, interfaces, mainInterfaceName);
    return interfaces;
  }

  stringifyObjectInterface(objectInterface: any): string {
    const objectKeys = Object.keys(objectInterface);
    let stringInterface = '{\n';
    for(let attr in objectInterface) {
      stringInterface += `\t"${attr}": ${objectInterface[attr]};\n`
    }
    return stringInterface += '}'
  }

  private buildInterface(json: any, interfaces: Array<InterfaceModel>, interfaceAttributeName: string): any {
    interfaces.push({interfaceName: interfaceAttributeName, interfaceValue: {}});
    for(let attr in json) {
      const attrType: string = typeof json[attr];
      if(Array.isArray(json[attr])) {
        let interfaceName: string = this.convertAttributeNameToCamelCase(attr);
        interfaces[interfaces.length - 1].interfaceValue[attr] = 'Array<' + interfaceName + '>';
        this.buildInterface(json[attr][0], interfaces, interfaceName);

      } else if(attrType === 'object' && json[attr] !== null) {
        let interfaceName: string = this.convertAttributeNameToCamelCase(attr);
        interfaces[interfaces.length - 1].interfaceValue[attr] = interfaceName;
        //if(!interfaces.find(interface => interface.interfaceName === attr)) {
            //this.buildInterface(json[attr], interfaces, attr);
        //}
        this.buildInterface(json[attr], interfaces, interfaceName);

      } else {
        interfaces[interfaces.length - 1].interfaceValue[attr] = json[attr] !== null ? attrType : 'null';
      }
    }
  }

  private convertAttributeNameToCamelCase(attributeName: string): string {
    return attributeName.split('_')
    .map(nameSection => nameSection.charAt(0).toUpperCase() + nameSection.slice(1))
    .join('');
  }

}
