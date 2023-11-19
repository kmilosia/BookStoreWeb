import React from 'react'
import NavbarMenuLink from './NavbarMenuLink'

function NavbarMenuLinks({toggleNavbar}) {
  return (
    <>
    <NavbarMenuLink toggleNavbar={toggleNavbar} path="/sklep" title="Sklep" />
    <NavbarMenuLink toggleNavbar={toggleNavbar} path="/wypozyczalnia" title="Wypożyczalnia" />
    <NavbarMenuLink toggleNavbar={toggleNavbar} path="/ksiazki" title="Książki" />
    <NavbarMenuLink toggleNavbar={toggleNavbar} path="/e-booki" title="Ebooki" />
    <NavbarMenuLink toggleNavbar={toggleNavbar} path="/kategorie" title="Kategorie" />
    <NavbarMenuLink toggleNavbar={toggleNavbar} path="/wiadomosci" title="Wiadomości" />
  </>
  )
}

export default NavbarMenuLinks
