
//将bus处理成能绑定事件和触发事件的东西
//EventEmitter的原型上有绑定事件和触发事件的方法，所以它的实例就可以作为bus
import { EventEmitter } from 'events'

const bus = new EventEmitter()

export default bus