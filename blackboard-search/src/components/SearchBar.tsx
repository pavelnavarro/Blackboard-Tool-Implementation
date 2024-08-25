import React, { useState, ChangeEvent, useEffect } from 'react'; // the use text is a box where we can save  text
// the change event help us manage the changes the user makes.
// the use effect is saying, once you make this, you should do this.

interface SearchBarProps { // we define the SearchBarProps informarion that it will need.
  onSearch: (term: string) => void; // the osnearch gets the text we inuput and does not return anything
}

const suggestionsList = [ // we create a list for storing the suggestion, we use const for not allowing to reasignate variables, we use list for allowing this
  'Yuja Manage Media',
  'Yuja Create Recording',
  'Yuja New Folder',
  'Yuja New Playlist',
  'Yuja Upload',
  'Yuja Go Back',
  'Yuja More Actions',
  'Yuja Sort',
  'Yuja Media Library',
  'Respondus Lockdown',
  'Textbooks',
  'Goal Performance',
  'Help',
  'Profile',
  'Courses',
  'Submit a request'
];

// we define the component SearchBar as a function of react that takes the properties of SearchBarProps
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => { // React.FC<SearchBarProps> = says that is a fucntional component of react, and that
  // the search bar gets a onSearch property
  const [searchTerm, setSearchTerm] = useState<string>(''); // when we use useState, the first element const [x,y], x is the 
  // actual value of the state, and y is the fucntion that updates the state.
  const [suggestions, setSuggestions] = useState<string[]>([]); // this sabes an array of suggestions and change the value of suggestions to upload it
  // the second part initialices the state, and that it will be an array of string, the empty []says that array is empty.

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => { // we define a function called handleInputChange
    // it takes an argument e that is a change in input, so we can know what the user is typing. 
    const value = e.target.value; // we create a variable name value and assing the text they input
    setSearchTerm(value); // we update it to make it contain the same that the user input it

    if (value.length > 0) { // if the camp is not empty
      const filteredSuggestions = suggestionsList.filter(suggestion => // we filter the siggestion list
        suggestion.toLowerCase().includes(value.toLowerCase()) // we place both in lowercase for a better comparasion
      );
      setSuggestions(filteredSuggestions); // we upload suggestions with the uploaded suggestios
    } else {
      setSuggestions([]); // if the camp is empty, the suggestions will appear empty also
    }
  };

  const handleSearch = () => { // we are define a new function
    onSearch(searchTerm); // we call onSearch with the actual search
    setSuggestions([]);// we set the siggestions empty
  };

  // we define the handleSuggestoinClick that takes suggestions as arguments
  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion); // we update the searchTerm state so it shows when the user makes click
    setSuggestions([]);// we clean the suggestions after clicking in one
    onSearch(suggestion); // this function passes as property to the onSearch
  };
// this alloes the suggestions be empty when the user hasnt type anything
  useEffect(() => { // is a hook in react that allows execute extra code after the component is shown in screen
    // if the search term is empty, it will clean the suggestions
    if (searchTerm.length === 0) {
      setSuggestions([]);
    }
  }, [searchTerm]); // it executes once searchterm changes.

  return ( // we return 
    <div className="relative w-full max-w-lg mt-6 flex justify-start">   
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleInputChange} 
        placeholder="Search..." 
        className="w-full p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <button 
        onClick={handleSearch} 
        className="absolute right-0 top-0 bottom-0 px-4 py-3 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"></path>
        </svg>
      </button>
      {suggestions.length > 0 && (
        // search suggestions
        <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10" style={{ top: '100%' }}> 
          {suggestions.map((suggestion, index) => (
            <li 
              key={index} 
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
