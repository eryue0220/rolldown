import { ModuleInfo } from '../types/module-info'
import { BindingModuleInfo } from '../binding'
import { unsupported } from '.'

export function transformModuleInfo(info: BindingModuleInfo): ModuleInfo {
  return {
    get ast() {
      return unsupported('ModuleInfo#ast')
    },
    get code() {
      return info.code
    },
    id: info.id,
  }
}