<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>website</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        .custom-bg {
            background-image: url('https://salient.tailwindui.com/_next/static/media/background-call-to-action.6a5a5672.jpg');
            /* Ensure the image file is in the same directory or adjust the path */
            background-size: cover;
            background-position: center;
        }
    </style>
</head>

<body class="bg-gray-100 text-gray-800 font-sans w-full">

    <!-- Navbar -->
    <nav class="bg-gray-800 w-full ">
        <div class="mx-auto max-w-full px-4 sm:pt-6 sm:pb-2 sm:px-6 lg:px-24">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button type="button"
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu" aria-expanded="false">
                        <span class="absolute -inset-0.5"></span>
                        <span class="sr-only">Open main menu</span>

                        <svg class="block size-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                        <svg class="hidden size-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex shrink-0 items-center ">
                        <!-- logo here -->
                        <img class="h-8 w-auto "
                            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                            alt="Your Company">
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <a href="#" class="rounded-md px-3 py-2 text-xl font-medium text-gray-300"
                                aria-current="page">Dashboard</a>
                            <a href="#"
                                class="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                            <a href="#"
                                class="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                            <a href="#"
                                class="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                        </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button type="button"
                        class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span class="absolute -inset-1.5"></span>
                        <span class="sr-only">View notifications</span>
                        <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        </div>
        <!-- <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                    aria-current="page">Dashboard</a>
                <a href="#"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                <a href="#"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                <a href="#"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
            </div>
        </div> -->
    </nav>


    <!-- Main Content -->
    <main class="container m-auto my-8 w-full">
        <section class="text-center px-4 w-full mt-28">
            <h1 class="text-4xl sm:text-7xl font-bold text-gray-900 leading-tight">
                Accounting <span class="relative text-blue-500">
                    made simple
                    <span class="absolute -bottom-1 left-0 w-full h-2 bg-blue-200"></span>
                </span>
                <br>for small businesses.
            </h1>
            <p class="mt-20 text-gray-600 max-w-xl mx-auto">
                Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you
                don’t get audited.
            </p>
            <div class="mt-16 flex items-center justify-center space-x-4">
                <a href="#" class="bg-gray-800 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full">
                    Get Started
                </a>
                <a href="#" class="flex items-center text-gray-700 font-medium hover:text-gray-900">
                    <svg class="w-5 h-5 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        viewBox="0 0 16 16">
                        <path
                            d="M6.354 5.5a.5.5 0 0 1 .492.41l.008.09v5a.5.5 0 0 1-.992.09L5.854 11v-5a.5.5 0 0 1 .5-.5zm1.147-.354a.5.5 0 0 1 .707 0l3 3a.5.5 0 0 1 .057.638l-.057.07-3 3a.5.5 0 0 1-.765-.638l.057-.07L9.293 9H3.5a.5.5 0 0 1-.492-.41L3 8.5a.5.5 0 0 1 .41-.492L3.5 8h5.793L7.293 6.207a.5.5 0 0 1-.057-.638l.057-.07z" />
                    </svg>
                    Watch video
                </a>
            </div>
        </section>

        <section class="m-20 w-full mx-auto relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 rounded-3xl">
            <div class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
                aria-hidden="true">
                <div class="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
                </div>
            </div>
            <div class="mx-auto max-w-full text-center">
                <h2 class="text-base/7 font-semibold text-indigo-600">Pricing</h2>
                <p class="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">Choose the
                    right plan for you</p>
            </div>
            <p class="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
                Choose an affordable plan that’s packed with the best features for engaging your audience, creating
                customer loyalty, and driving sales.
            </p>
            <div class="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
                <!-- Card 1 -->
                <div class="rounded-3xl bg-white p-8 shadow-md ring-1 ring-gray-900/10">
                    <h3 class="text-base/7 font-semibold text-indigo-600">Hobby</h3>
                    <p class="mt-4 text-5xl font-semibold text-gray-900">$29 <span
                            class="text-base text-gray-500">/month</span></p>
                    <p class="mt-6 text-base/7 text-gray-600">The perfect plan if you're just getting started with our
                        product.</p>
                    <ul class="mt-8 space-y-3 text-sm text-gray-600">
                        <li class="flex items-center gap-3"><svg class="h-6 w-6 text-indigo-600" fill="currentColor">
                                <path d="M16.704 4.153a.75.75..."></path>
                            </svg> 25 products</li>
                        <li class="flex items-center gap-3"><svg class="h-6 w-6 text-indigo-600" fill="currentColor">
                                <path d="M16.704 4.153a.75.75..."></path>
                            </svg> Up to 10,000 subscribers</li>
                        <li class="flex items-center gap-3"><svg class="h-6 w-6 text-indigo-600" fill="currentColor">
                                <path d="M16.704 4.153a.75.75..."></path>
                            </svg> Advanced analytics</li>
                    </ul>
                    <a href="#"
                        class="mt-6 block rounded-md bg-indigo-600 text-center text-white py-3 text-sm font-semibold hover:bg-indigo-500">Get
                        started today</a>
                </div>
                <!-- Card 2 -->
                <div class="rounded-3xl bg-gray-900 p-8 shadow-md ring-1 ring-gray-900/10">
                    <h3 class="text-base/7 font-semibold text-indigo-400">Enterprise</h3>
                    <p class="mt-4 text-5xl font-semibold text-white">$99 <span
                            class="text-base text-gray-400">/month</span></p>
                    <p class="mt-6 text-base/7 text-gray-300">Dedicated support and infrastructure for your company.</p>
                    <ul class="mt-8 space-y-3 text-sm text-gray-300">
                        <li class="flex items-center gap-3"><svg class="h-6 w-6 text-indigo-400" fill="currentColor">
                                <path d="M16.704 4.153a.75.75..."></path>
                            </svg> Unlimited products</li>
                        <li class="flex items-center gap-3"><svg class="h-6 w-6 text-indigo-400" fill="currentColor">
                                <path d="M16.704 4.153a.75.75..."></path>
                            </svg> Unlimited subscribers</li>
                        <li class="flex items-center gap-3"><svg class="h-6 w-6 text-indigo-400" fill="currentColor">
                                <path d="M16.704 4.153a.75.75..."></path>
                            </svg> Marketing automations</li>
                    </ul>
                    <a href="#"
                        class="mt-6 block rounded-md bg-indigo-500 text-center text-white py-3 text-sm font-semibold hover:bg-indigo-400">Get
                        started today</a>
                </div>
                <!-- Card 3 -->
                <div class="rounded-3xl bg-white p-8 shadow-md ring-1 ring-gray-900/10">
                    <h3 class="text-base/7 font-semibold text-indigo-600">Pro</h3>
                    <p class="mt-4 text-5xl font-semibold text-gray-900">$49 <span
                            class="text-base text-gray-500">/month</span></p>
                    <p class="mt-6 text-base/7 text-gray-600">A plan tailored for professionals looking for scalability.
                    </p>
                    <ul class="mt-8 space-y-3 text-sm text-gray-600">
                        <li class="flex items-center gap-3"><svg class="h-6 w-6 text-indigo-600" fill="currentColor">
                                <path d="M16.704 4.153a.75.75..."></path>
                            </svg> 50 products</li>
                        <li class="flex items-center gap-3"><svg class="h-6 w-6 text-indigo-600" fill="currentColor">
                                <path d="M16.704 4.153a.75.75..."></path>
                            </svg> Up to 20,000 subscribers</li>
                        <li class="flex items-center gap-3"><svg class="h-6 w-6 text-indigo-600" fill="currentColor">
                                <path d="M16.704 4.153a.75.75..."></path>
                            </svg> Priority support</li>
                    </ul>
                    <a href="#"
                        class="mt-6 block rounded-md bg-indigo-600 text-center text-white py-3 text-sm font-semibold hover:bg-indigo-500">Get
                        started today</a>
                </div>
            </div>
        </section>

        <section class=" mt-20 custom-bg  text-center text-white shadow-md px-6 sm:px-12 lg:px-24 py-12">
            <!-- <div class=""> -->
            <h1 class="text-4xl sm:text-5xl font-bold leading-tight">
                Get started today
            </h1>
            <p class="mt-4 max-w-xl mx-auto text-lg">
                It’s time to take control of your books. Buy our software so you can feel like you’re doing something
                productive.
            </p>
            <div class="mt-6">
                <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full">
                    Get 6 months free
                </a>
            </div>
            <!-- </div> -->
        </section>


        <section>
            
        </section>




    </main>


    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-4">
        <!-- <button class="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition">
            Confirm Selection
        </button> -->

    </footer>


</body>

</html>
