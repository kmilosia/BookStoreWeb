import React from 'react'
import NavbarMenuLink from './NavbarMenuLink'

function NavbarMenuLinks({onClick}) {
  return (
    <>
    <NavbarMenuLink onClick={onClick} path="/sklep" title="Sklep" />
    <NavbarMenuLink onClick={onClick} path="/wypozyczalnia" title="Wypożyczalnia" />
    <NavbarMenuLink onClick={onClick} path="/ksiazki" title="Książki" />
    <NavbarMenuLink onClick={onClick} path="/ebooki" title="Ebooki" />
    <NavbarMenuLink onClick={onClick} path="/kategorie" title="Kategorie" />
    <NavbarMenuLink onClick={onClick} path="/wiadomosci" title="Wiadomości" />
  </>
  )
}

export default NavbarMenuLinks
