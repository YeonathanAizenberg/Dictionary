import React from 'react'
import { querySelect } from '../store/querySelect'
import { useQuery } from '../store/useQuery'
import { useLocalObservable } from 'mobx-react'

const DataContext = React.createContext(null)

export const DataProvider = ({children}) => {
    const dataStore = [useLocalObservable(useQuery), useLocalObservable(querySelect)]

    return <DataContext.Provider value={dataStore}>
        {children}
    </DataContext.Provider>
}

export const useDataStore = () => React.useContext(DataContext)