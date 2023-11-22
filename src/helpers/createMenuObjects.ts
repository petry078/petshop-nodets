type MenuOptions = '' | 'all' | 'dogs' | 'cats' | 'fishes'

export const createMenuObjects = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dogs: false,
        cats: false,
        fishes: false
    }

    if(activeMenu !== '') {
        returnObject[activeMenu] = true
    }

    return returnObject
}

export const teste = () => {

}
