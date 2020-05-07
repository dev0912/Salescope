import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    // const store = createStore(rootReducer)

    return {
        ...store,
        runSaga: sagaMiddleware.run(rootSaga)
    }
}

export default configureStore