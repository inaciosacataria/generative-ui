'use client'

import Link from 'next/link'

import { SiDiscord, SiGithub, SiX } from 'react-icons/si'

import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

const externalLinks = [
  {
    name: 'X',
    href: 'https://x.com/Tablutech_ai',
    icon: <SiX className="mr-2 h-4 w-4" />
  },
  {
    name: 'Discord',
    href: 'https://discord.gg/zRxaseCuGq',
    icon: <SiDiscord className="mr-2 h-4 w-4" />
  },
  {
    name: 'GitHub',
    href: 'https://git.new/Tablutech',
    icon: <SiGithub className="mr-2 h-4 w-4" />
  }
]

export function ExternalLinkItems() {
  return (
    <>
      {externalLinks.map(link => (
        <DropdownMenuItem key={link.name} asChild>
          <Link href={link.href} target="_blank" rel="noopener noreferrer">
            {link.icon}
            <span>{link.name}</span>
          </Link>
        </DropdownMenuItem>
      ))}
    </>
  )
}
