## TODO

:bug: --> bugs
- Fix new computer game bug (JSON.stringify with circular value)
- Fix components warnings
- Fix locales warnings
- Fix game rounds colors
- Remove captured pieces on game change
***

:art: --> Styles
- Improve BaseDrawerItem presentation
- Improve BaseRadioGroup presentation
- Animate drawer sliding
- Animate modal appear
- Style drawer right
***

:building_construction: --> Big changes
- Create a token storage service to use on app onMounted hook
- Use store getters instead of computed properties manipulation in components
- Use stockfish computer level in NewGameComputer
- HumanGame : init board from human game id
- Add BaseDrawerSeparator
- Add BaseCard component
- Remove back/forward buttons
- Add captured pieces on computer games storage
- Add captured pieces on human games storage
- Add form validation
- Choose locale from settings modale
- Implement dark mode
- Make it possible to delete a human game
***

:wheelchair: --> Accessibility
- Drawers accessibility with screen readers
- Mobile versions of drawers
- Mobile versions of modals
***

:test_tube: --> Unit Testing
- Add unit tests with vitest
- Test stores
- Test base components
- Test app components
- Use TS on stores
***

:memo: --> Documentation
- Update repo description
- Update README.md
***