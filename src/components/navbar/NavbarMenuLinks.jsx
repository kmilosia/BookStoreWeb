import React from 'react'
import NavbarMenuLink from './NavbarMenuLink'

function NavbarMenuLinks() {
  return (
    <>
    <NavbarMenuLink path="/sklep" title="Sklep" />
    <NavbarMenuLink path="/wypozyczalnia" title="Wypożyczalnia" />
    <NavbarMenuLink path="/ksiazki" title="Książki" />
    <NavbarMenuLink path="/e-booki" title="E-Booki" />
    <NavbarMenuLink path="/kategorie" title="Kategorie" />
    <NavbarMenuLink path="/wiadomosci" title="Wiadomości" />
  </>
  )
}

export default NavbarMenuLinks
