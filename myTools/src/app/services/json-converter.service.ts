import { Injectable, signal, WritableSignal } from '@angular/core';
import { ObjectInterface } from '../model/object-interface';
import { AttributeInterface } from '../model/attribute-interface';

@Injectable({
  providedIn: 'root'
})
export class JsonConverterService {

  readonly objectInterfaces: WritableSignal<Array<ObjectInterface>> = signal(null);

  convertJsonToInterface(jsonToConvert: string, mainInterfaceName: string): void {
    const json: any = JSON.parse(jsonToConvert);
    let interfaces: Array<ObjectInterface> = [];
    this.buildInterface(json, interfaces, mainInterfaceName);
    this.objectInterfaces.set(interfaces);
  }

  stringifyObjectInterface(interfaceName: string, objectInterface: any): string {
    let stringInterface = `export interface ${interfaceName} {\n`;
    for(let attr in objectInterface) {
      stringInterface += `\t${attr}: ${objectInterface[attr]};\n`
    }
    return stringInterface += '}'
  }

  private buildInterface(currentObjectJson: any, processedInterfaces: Array<ObjectInterface>, interfaceAttributeName: string): void {
    if(!this.findInterfaceByName(interfaceAttributeName, processedInterfaces)) {
      processedInterfaces.push({name: interfaceAttributeName, value: {}});
    }

    for(let attrName in currentObjectJson) {
      const attrInCurrentObject: AttributeInterface = {
        name: attrName,
        type: currentObjectJson[attrName] !== null ? typeof currentObjectJson[attrName] : 'null',
        parent: interfaceAttributeName
      };

      if(Array.isArray(currentObjectJson[attrInCurrentObject.name])) {
        const firstAttrType: string = typeof currentObjectJson[attrInCurrentObject.name][0]
        if (firstAttrType !== 'object') {
          this.findInterfaceByName(attrInCurrentObject.parent, processedInterfaces).value[attrInCurrentObject.name] = 'Array<' + firstAttrType + '>';
        } else {
          let interfaceName: string = this.convertAttributeNameToCamelCase(attrInCurrentObject.name);
          this.findInterfaceByName(attrInCurrentObject.parent, processedInterfaces).value[attrInCurrentObject.name] = 'Array<' + interfaceName + '>';
          this.buildInterface(currentObjectJson[attrInCurrentObject.name][0], processedInterfaces, interfaceName);
        }

      } else if(attrInCurrentObject.type === 'object' && currentObjectJson[attrInCurrentObject.name] !== null) {
        let interfaceName: string = this.convertAttributeNameToCamelCase(attrInCurrentObject.name);
        this.findInterfaceByName(attrInCurrentObject.parent, processedInterfaces).value[attrInCurrentObject.name] = interfaceName;
        this.buildInterface(currentObjectJson[attrInCurrentObject.name], processedInterfaces, interfaceName);

      } else {
        this.findInterfaceByName(attrInCurrentObject.parent, processedInterfaces).value[attrInCurrentObject.name] = attrInCurrentObject.type;
      }
    }
  }

  private convertAttributeNameToCamelCase(attributeName: string): string {
    return attributeName.split('_')
    .map(nameSection => nameSection.charAt(0).toUpperCase() + nameSection.slice(1))
    .join('');
  }

  private findInterfaceByName(objectName: string, objectList: Array<ObjectInterface>) {
    return objectList.find(object => object.name === objectName);
  }

}
