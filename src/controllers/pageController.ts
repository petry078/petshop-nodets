import {Request , Response} from 'express'
import {createMenuObjects} from '../helpers/createMenuObjects'
import {Pets} from '../models/pets'

export const home = (req:Request, res:Response) =>{
    let list = Pets.getAll()
    res.render('pages/pages',{
        menu: createMenuObjects('all'),
        banner:{
            title: 'Todos os animais',
            background:'allanimals.jpg'
        },
        list

    })
}
export const dogs = (req:Request, res:Response) =>{
    let list = Pets.getFromType('dog')
    res.render('pages/pages',{
        menu: createMenuObjects('dogs'),
        banner:{
            title:'Todos os cachorros',
            background:'banner_dog.jpg'
        },
        list
    })
}

export const cats = (req:Request, res:Response) =>{
    let list = Pets.getFromType('cat')
    res.render('pages/pages',{
        menu: createMenuObjects('cats'),
        banner:{
            title:'Todos os gatos',
            background:'banner_cat.jpg'
        },
        list
    })
        
}

export const fish = (req:Request, res:Response) =>{
    let list = Pets.getFromType('fish')
        res.render('pages/pages',{
            menu: createMenuObjects('fishes'),
            banner:{
                title:'Todos os peixes',
                background:'banner_fish.jpg'
            },
            list
        })
}




