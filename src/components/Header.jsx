import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
      <header>
        <nav class="container flex items-center py-4 mt-4 sm:mt-12 text-indigo-500 uppercase text-xs">
          {/* <FontAwesomeIcon icon={ faWallet} /> */ }
              <FontAwesomeIcon icon={faWallet} class="w-6" />
              <h3 class="mx-2 text-base">wallet</h3>
            <ul class="hidden sm:flex flex-1 justify-end items-center gap-12">
              <li class="cursor-pointer">Features</li>
              <li class="cursor-pointer">Pricing</li>
              <li class="cursor-pointer">Contact</li>
              <button type="button" class="bg-red-500 text-white rounded-md px-7 py-3">Login</button>
            </ul>
          <div class="flex sm:hidden flex-1 justify-end">
            <FontAwesomeIcon icon={ faBars } class="w-6" />
          </div>
        </nav>
      </header>
      </>
  );
};

export default Header;