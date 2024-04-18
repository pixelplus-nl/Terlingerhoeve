"use client";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";


function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function SearchBookDropdown(props: any) {
  const [selected, setSelected] = useState(props.dropdown[0].option);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label>
            <span className="text-sm pl-3">{props.label}</span>
          </Listbox.Label>
          <div className="relative">
            <Listbox.Button className="relative cursor-pointer w-full rounded-3xl bg-white py-3.5 pl-3 pr-10 text-left text-gray-900  ring-1 ring-inset ring-[#556A76]/50">
              <span className="block truncate text-sm text-[#556A76]/50">
                {selected}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                ↓
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Listbox.Options className="absolute text-sm bg-[#fff] z-10 mt-1 max-h-60 overflow-auto rounded-xl bg-white py-1 shadow-lg ring-1 ring-[#556A76] ring-opacity-20 focus:outline-none sm:text-sm">
                {props.dropdown.map((dropdown: any, index: number) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative border-b-[1px] border-blue/20 last:border-none cursor-default select-none py-2 mx-3  pr-10"
                      )
                    }
                    value={dropdown.option}>
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}>
                          {dropdown.option}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center "
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
