<template>
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-display">Contact Me!</h2>
    <div class="max-w-xs w-full lg:max-w-full lg:flex">
      <div class="rounded-lg p-4 flex flex-col justify-between leading-normal">
        <h3>My name is Liz. Welcome to my Blog!</h3>
        <p>
          Plase contact me. I'll reply as soon as posible!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est facere
          fugit, corrupti rem quo quos ullam autem nihil. Corrupti adipisci
          cupiditate deserunt veniam optio atque maxime possimus asperiores
          fugiat repellendus.
        </p>
      </div>
      <img
        class="shadow-md ml-6 h-48 lg:h-48 lg:w-48 flex-none bg-cover rounded-lg text-center overflow-hidden"
        src="../assets/img/business-squre.jpeg"
        alt="project management image"
      />
    </div>

    <div class="max-w-xs w-full lg:max-w-full lg:flex">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p class="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>
