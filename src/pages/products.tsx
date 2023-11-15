import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/nav'
import BodyIndex from '@/components/body/bodyIndex'
import SmallWithNavigation from '@/components/footer/footer'
import Products from '@/components/body/bodyProducts'


export default function Home() {
  return (
    <>
      <Head>
        <title>Les VH</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar/>
        <Products/>
        <SmallWithNavigation/>
      </main>
    </>
  )
}
