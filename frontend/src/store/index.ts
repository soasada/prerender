import {ActionContext, createStore} from 'vuex';
import Order from '../model/Order';
import fetch from 'node-fetch';

interface AppState {
    counter: number,
    order: Order | undefined
}

const state: AppState = {
    counter: 0,
    order: undefined
}

export function createAppStore() {
    return createStore({
        state,
        mutations: {
            ADD(state: AppState) {
                state.counter = state.counter + 1;
            },
            SET_ORDER(state: AppState, order: Order) {
                state.order = order;
            }
        },
        actions: {
            add(context: ActionContext<AppState, any>): void {
                context.commit('ADD');
            },
            fetchOrder(context: ActionContext<AppState, any>): void {
                //if (!import.meta.env.SSR) {
                console.log('fetchOrder');
                    fetch('http://localhost:8080/api/orders')
                        .then(response => {
                            console.log('json');
                            return response.json();
                        })
                        .then(order => {
                            console.log('SET_ORDER');
                            context.commit('SET_ORDER', order);
                        })
                        .catch(err => console.log(err));
                //}
            }
        },
        getters: {
            getCounter(state: AppState): number {
                return state.counter;
            },
            getOrder(state: AppState): Order | undefined {
                console.log('getOrder');
                return state.order;
            }
        }
    });
}