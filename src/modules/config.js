import { Component } from 'react'
import axios from 'axios'
import query from './query'
import bus from './bus'
import store from '../store'

Component.prototype.$http = axios
Component.prototype.query = query
Component.prototype.bus = bus
Component.prototype.store = store