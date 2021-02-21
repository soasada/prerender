import {ActionContext, createStore} from 'vuex';
import Order from '../model/Order';
import fetch from 'node-fetch';

interface AppState {
    counter: number,
    order: Order
}

const state: AppState = {
    counter: 0,
    order: {
        id: '',
        product: ''
    }
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
                if (!import.meta.env.SSR) {
                    fetch('http://localhost:8080/api/orders')
                        .then(response => response.json())
                        .then(order => context.commit('SET_ORDER', order));
                }
            }
        },
        getters: {
            getCounter(state: AppState): number {
                return state.counter;
            },
            getOrder(state: AppState): Order {
                return state.order;
            }
        }
    });
}