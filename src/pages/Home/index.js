import React from 'react'
import ExampleComponent from '../../components/Example'
import { useAuthStore } from '../../store'
const Home = () => {
    const authStore = useAuthStore()
    console.log(authStore)
    return (
        <div>Home
            <ExampleComponent />
            <div>{authStore.token}</div>
        </div>
    )
}

export default Home