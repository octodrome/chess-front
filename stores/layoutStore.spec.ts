import { describe, expect, it, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import {useLayoutStore} from './layoutStore'

describe('layoutStore', async () => {
    beforeEach(() => {
        // creates a fresh pinia and make it active so it's automatically picked
        // up by any useStore() call without having to pass it to it:
        // `useStore(pinia)`
        setActivePinia(createPinia())
    })

    it('toggleLeftDrawer', () => {
        const layoutStore = useLayoutStore()
        expect(layoutStore.drawer.leftIsOpened).toBe(false)
        layoutStore.toggleLeftDrawer()
        expect(layoutStore.drawer.leftIsOpened).toBe(true)
        layoutStore.toggleLeftDrawer()
        expect(layoutStore.drawer.leftIsOpened).toBe(false)
    })
})