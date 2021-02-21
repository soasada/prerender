import {ActionContext, createStore} from 'vuex';

interface AppState {
    counter: number
}

const state: AppState = {
    counter: 0
}

export function createAppStore() {
    return createStore({
        state,
        mutations: {
            ADD(state: AppState) {
                state.counter = state.counter + 1;
            }
        },
        actions: {
            add(context: ActionContext<AppState, any>) {
                context.commit('ADD');
            }
        },
        modules: {},
        getters: {
            getCounter(state: AppState): number {
                return state.counter;
            }
        }
    });
}