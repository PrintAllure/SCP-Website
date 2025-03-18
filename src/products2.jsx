'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import vase from './assets/Vase.jpg'
import holder from './assets/CardHolder.jpg'
import Trinket from './assets/Trinket.png'
import Deskbin from './assets/Deskbin.jpg'
import Catch from './assets/Catch.jpg';
import Flower from './assets/Flower.jpg';
import Moon from './assets/Moon.jpg';
import Heart from './assets/Heart.jpg';
import Corporate from './assets/Corporate.png'
import Relaxed from './assets/Relaxed.jpg'
import Phone from './assets/Phone.jpg'
import Face from './assets/Face.png'
import Gun from './assets/Gun.png'

const products = [
  {
    id: 1,
    name: 'Catch Tray',
    href: '#',
    price: '200',
    imageSrc: Catch,
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Moon Tray',
    href: '#',
    price: '150',
    imageSrc: Moon,
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Flower Tray',
    href: '#',
    price: '150',
    imageSrc: Flower,
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Heart Tray',
    href: '#',
    price: '150',
    imageSrc: Heart,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
      id: 5,
      name: 'Trinket Tray',
      href: '#',
      price: '200',
      imageSrc: Trinket,
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 6,
      name: 'Vase',
      href: '#',
      price: '200',
      imageSrc: vase,
      imageAlt: 'Vase Image',
    },
    {
      id: 7,
      name: 'Relaxed Pot Small',
      href: '#',
      price: '150',
      imageSrc: Relaxed,
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    
    {
      id: 9,
      name: 'Relaxed Pot Large',
      href: '#',
      price: '250',
      imageSrc: Relaxed,
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 10,
      name: 'Happy Pot Small',
      href: '#',
      price: '150',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },

    {
      id: 12,
      name: 'Happy Pot Large',
      href: '#',
      price: '250',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 13,
        name: 'Corporate Pot',
        href: '#',
        price: '200',
        imageSrc: Corporate,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 14,
        name: 'Phone Stand',
        href: '#',
        price: '150',
        imageSrc: Phone,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 15,
        name: 'Card Holder',
        href: '#',
        price: '150',
        imageSrc: holder,
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 16,
        name: 'PC Card Holder',
        href: '#',
        price: '200',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 17,
        name: 'Nameplate',
        href: '#',
        price: '150',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 18,
        name: 'Gun',
        href: '#',
        price: '350',
        imageSrc: Gun,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 19,
        name: 'Custom Miniatures',
        href: '#',
        price: '400',
        imageSrc: Face,
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 20,
        name: 'Deskbin',
        href: '#',
        price: '150',
        imageSrc: Deskbin,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 21,
        name: 'Corporate Box',
        href: '#',
        price: '1000',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                />
                <h3 className="mt-4 text-lg text-black-700 font-bold">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">&#8377;{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  