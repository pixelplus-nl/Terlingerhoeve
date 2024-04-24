"use client";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const people = [
  { id: 1, name: "Lorem ipsum" },
  { id: 2, name: "Lorem ipsum" },
  { id: 3, name: "Lorem ipsum" },

];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function SearchBookDropdown(props: any) {
  const [selected, setSelected] = useState(people[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label>
            <span className="text-sm pl-3">{props.label}</span>
          </Listbox.Label>
          <div className="relative">
<<<<<<< Updated upstream
            <Listbox.Button className="relative cursor-pointer w-full rounded-3xl bg-white py-3.5 pl-3 pr-10 text-left text-gray-900  ring-1 ring-inset ring-[#556A76]/50">
              <span className="block truncate text-sm text-[#556A76]/50">
                {selected.name}
=======
            <Listbox.Button className="relative cursor-pointer w-full rounded-3xl bg-white py-3.5 pl-3 pr-8 text-left text-gray-900  ring-1 ring-inset ring-[#556A76]/50">
              <span className="block truncate text-sm text-blue">
                {selected}
>>>>>>> Stashed changes
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                ↓
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
<<<<<<< Updated upstream
              <Listbox.Options className="absolute text-sm bg-[#fff] z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 shadow-lg ring-1 ring-[#556A76] ring-opacity-20 focus:outline-none sm:text-sm">
                {people.map((person) => (
=======
              <Listbox.Options className="absolute z-30 text-sm bg-[#fff]  mt-1 max-h-60 overflow-auto rounded-xl bg-white py-1 shadow-lg ring-1 ring-[#556A76] ring-opacity-20 focus:outline-none sm:text-sm">
                {props.dropdown.map((dropdown: any, index: number) => (
>>>>>>> Stashed changes
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
<<<<<<< Updated upstream
                        "relative cursor-default select-none py-2 pl-2 pr-9"
=======
                        "relative border-b-[1px] border-blue/20 last:border-none cursor-default select-none py-2 mx-3 pr-7 md:pr-10 lg:pr-12"
>>>>>>> Stashed changes
                      )
                    }
                    value={person}>
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}>
                          {person.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-2"
                            )}>
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
