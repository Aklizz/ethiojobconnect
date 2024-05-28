import React from "react";

const categories = [
  {
    name: "Home | የቤት",
    value: "home",
  },
  {
    name: "Technology | ቴክኖሎጂ ባለሙያ",
    value: "technology",
  },
  {
    name: "Labour | የጉልበት ሥራ",
    value: "fashion",
  },
  {
    name: "Sales | ሽያጭ ባለሙያ ",
    value: "sales",
  },
  {
    name: "Health Care | የጤና ባለሙያ ",
    value: "health care",
  },
  {
    name: "Tutor | አስጠኚ",
    value: "tutor",
  },
  {
    name: "Event Planner | አስተባባሪ ",
    value: "event planner",
  },
  {
    name: "Photographer | የፎቶግራፍ ባለሙያ ",
    value: "photographer",
  },
  {
    name: "Beauty | የውበት ሙያ ",
    value: "beauty",
  },
  {
    name: "Others | ሌሎች ",
    value: "others",
  },
];

const ages = [
  {
    name: "0-2 years/አመት",
    value: "0-2",
  },
  {
    name: "3-5 years/አመት",
    value: "3-5",
  },
  {
    name: "6-8 years/አመት",
    value: "6-8",
  },
  {
    name: "8-10 years/አመት",
    value: "8-10",
  },
  {
    name: "10+ years/አመት",
    value: "10+",
  },
];
function Filters({ showFilters, setShowFilters, filters, setFilters }) {
  return (
    <div className="w-72 flex flex-col">
      <div className="flex justify-between">
        <h1 className="text-orange-900  text-xl">Filters | ምረጥ</h1>
        <i
          className="ri-close-line  text-xl cursor-pointer"
          onClick={() => setShowFilters(!showFilters)}
        ></i>
      </div>

      <div className="flex flex-col gap-1 mt-5">
        <h1 className="text-gray-600">Categories | ምድብ</h1>

        <div className="flex flex-col">
          {categories.map((category) => {
            return (
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="category"
                  className="max-width"
                  checked={filters.category.includes(category.value)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFilters({
                        ...filters,
                        category: [...filters.category, category.value],
                      });
                    } else {
                      setFilters({
                        ...filters,
                        category: filters.category.filter(
                          (item) => item !== category.value
                        ),
                      });
                    }
                  }}
                />
                <label htmlFor="category">{category.name}</label>
              </div>
            );
          })}
        </div>

        <h1 className="text-gray-600 mt-5">Experiance/ ልምድ</h1>

        <div className="flex flex-col">
          {ages.map((age) => {
            return (
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  name="age"
                  className="max-width"
                  checked={filters.age.includes(age.value)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFilters({
                        ...filters,
                        age: [...filters.age, age.value],
                      });
                    } else {
                      setFilters({
                        ...filters,
                        age: filters.age.filter((item) => item !== age.value),
                      });
                    }
                  }}
                />
                <label htmlFor="age">{age.name}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Filters;
