import { Word } from './gameLogic';

export const DICTIONARY: Word[] = [
    // Originally included
    { term: 'Serendipity', definition: 'The occurrence and development of events by chance in a happy or beneficial way.', partOfSpeech: 'noun' },
    { term: 'Ephemeral', definition: 'Lasting for a very short time.', partOfSpeech: 'adjective' },
    { term: 'Ubiquitous', definition: 'Present, appearing, or found everywhere.', partOfSpeech: 'adjective' },
    { term: 'Mellifluous', definition: '(of a voice or words) sweet or musical; pleasant to hear.', partOfSpeech: 'adjective' },
    { term: 'Quixotic', definition: 'Exceedingly idealistic; unrealistic and impractical.', partOfSpeech: 'adjective' },
    { term: 'Pernicious', definition: 'Having a harmful effect, especially in a gradual or subtle way.', partOfSpeech: 'adjective' },
    { term: 'Sycophant', definition: 'A person who acts obsequiously toward someone important in order to gain advantage.', partOfSpeech: 'noun' },
    { term: 'Obfuscate', definition: 'Render obscure, unclear, or unintelligible.', partOfSpeech: 'verb' },
    { term: 'Cacophony', definition: 'A harsh, discordant mixture of sounds.', partOfSpeech: 'noun' },
    { term: 'Ennui', definition: 'A feeling of listlessness and dissatisfaction arising from a lack of occupation or excitement.', partOfSpeech: 'noun' },

    // New Additions - A
    { term: 'Aberration', definition: 'A departure from what is normal, usual, or expected, typically one that is unwelcome.', partOfSpeech: 'noun' },
    { term: 'Acquiesce', definition: 'Accept something reluctantly but without protest.', partOfSpeech: 'verb' },
    { term: 'Alacrity', definition: 'Brisk and cheerful readiness.', partOfSpeech: 'noun' },
    { term: 'Ameliorate', definition: 'Make (something bad or unsatisfactory) better.', partOfSpeech: 'verb' },
    { term: 'Anachronism', definition: 'A thing belonging or appropriate to a period other than that in which it exists.', partOfSpeech: 'noun' },
    { term: 'Apoplectic', definition: 'Overcome with anger; extremely indignant.', partOfSpeech: 'adjective' },
    { term: 'Arcane', definition: 'Understood by few; mysterious or secret.', partOfSpeech: 'adjective' },
    { term: 'Avarice', definition: 'Extreme greed for wealth or material gain.', partOfSpeech: 'noun' },

    // B
    { term: 'Belligerent', definition: 'Hostile and aggressive.', partOfSpeech: 'adjective' },
    { term: 'Benevolent', definition: 'Well meaning and kindly.', partOfSpeech: 'adjective' },
    { term: 'Boondoggle', definition: 'Work or activity that is wasteful or pointless but gives the appearance of having value.', partOfSpeech: 'noun' },
    { term: 'Brusque', definition: 'Abrupt or offhand in speech or manner.', partOfSpeech: 'adjective' },

    // C
    { term: 'Cajole', definition: 'Persuade someone to do something by sustained coaxing or flattery.', partOfSpeech: 'verb' },
    { term: 'Callous', definition: 'Showing or having an insensitive and cruel disregard for others.', partOfSpeech: 'adjective' },
    { term: 'Candor', definition: 'The quality of being open and honest in expression; frankness.', partOfSpeech: 'noun' },
    { term: 'Capitulate', definition: 'Cease to resist an opponent or an unwelcome demand; surrender.', partOfSpeech: 'verb' },
    { term: 'Capricious', definition: 'Given to sudden and unaccountable changes of mood or behavior.', partOfSpeech: 'adjective' },
    { term: 'Caustic', definition: 'Sarcastic in a scathing and bitter way.', partOfSpeech: 'adjective' },
    { term: 'Charlatan', definition: 'A person falsely claiming to have a special knowledge or skill; a fraud.', partOfSpeech: 'noun' },
    { term: 'Circumspect', definition: 'Wary and unwilling to take risks.', partOfSpeech: 'adjective' },
    { term: 'Clandestine', definition: 'Kept secret or done secretively, especially because illicit.', partOfSpeech: 'adjective' },
    { term: 'Coerce', definition: 'Persuade (an unwilling person) to do something by using force or threats.', partOfSpeech: 'verb' },

    // D
    { term: 'Debacle', definition: 'A sudden and ignominious failure; a fiasco.', partOfSpeech: 'noun' },
    { term: 'Deferential', definition: 'Showing deference; respectful.', partOfSpeech: 'adjective' },
    { term: 'Demure', definition: '(of a woman or her behavior) reserved, modest, and shy.', partOfSpeech: 'adjective' },
    { term: 'Despot', definition: 'A ruler or other person who holds absolute power, typically one who exercises it in a cruel or oppressive way.', partOfSpeech: 'noun' },
    { term: 'Diligent', definition: 'Having or showing care and conscientiousness in one\'s work or duties.', partOfSpeech: 'adjective' },
    { term: 'Disparate', definition: 'Essentially different in kind; not allowing comparison.', partOfSpeech: 'adjective' },
    { term: 'Docile', definition: 'Ready to accept control or instruction; submissive.', partOfSpeech: 'adjective' },

    // E
    { term: 'Ebullient', definition: 'Cheerful and full of energy.', partOfSpeech: 'adjective' },
    { term: 'Eclectic', definition: 'Deriving ideas, style, or taste from a broad and diverse range of sources.', partOfSpeech: 'adjective' },
    { term: 'Egregious', definition: 'Outstandingly bad; shocking.', partOfSpeech: 'adjective' },
    { term: 'Eloquent', definition: 'Fluent or persuasive in speaking or writing.', partOfSpeech: 'adjective' },
    { term: 'Elucidate', definition: 'Make (something) clear; explain.', partOfSpeech: 'verb' },
    { term: 'Empathy', definition: 'The ability to understand and share the feelings of another.', partOfSpeech: 'noun' },
    { term: 'Enigmatic', definition: 'Difficult to interpret or understand; mysterious.', partOfSpeech: 'adjective' },
    { term: 'Epitome', definition: 'A person or thing that is a perfect example of a particular quality or type.', partOfSpeech: 'noun' },
    { term: 'Esoteric', definition: 'Intended for or likely to be understood by only a small number of people with a specialized knowledge or interest.', partOfSpeech: 'adjective' },
    { term: 'Exacerbate', definition: 'Make (a problem, bad situation, or negative feeling) worse.', partOfSpeech: 'verb' },

    // F
    { term: 'Fabricate', definition: 'Invent or concoct (something), typically with deceitful intent.', partOfSpeech: 'verb' },
    { term: 'Facetious', definition: 'Treating serious issues with deliberately inappropriate humor; flippant.', partOfSpeech: 'adjective' },
    { term: 'Fastidious', definition: 'Very attentive to and concerned about accuracy and detail.', partOfSpeech: 'adjective' },
    { term: 'Fervent', definition: 'Having or displaying a passionate intensity.', partOfSpeech: 'adjective' },
    { term: 'Flabbergasted', definition: 'Greatly surprised; astonished.', partOfSpeech: 'adjective' },
    { term: 'Forsake', definition: 'Abandon (someone or something).', partOfSpeech: 'verb' },
    { term: 'Fortuitous', definition: 'Happening by accident or chance rather than design.', partOfSpeech: 'adjective' },
    { term: 'Fractious', definition: '(typically of children) irritable and quarrelsome.', partOfSpeech: 'adjective' },
    { term: 'Furtive', definition: 'Attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble; secretive.', partOfSpeech: 'adjective' },

    // G
    { term: 'Gallant', definition: '(of a person or their behavior) brave; heroic.', partOfSpeech: 'adjective' },
    { term: 'Garish', definition: 'Obtrusively bright and showy; lurid.', partOfSpeech: 'adjective' },
    { term: 'Garrulous', definition: 'Excessively talkative, especially on trivial matters.', partOfSpeech: 'adjective' },
    { term: 'Gregarious', definition: '(of a person) fond of company; sociable.', partOfSpeech: 'adjective' },
    { term: 'Guile', definition: 'Sly or cunning intelligence.', partOfSpeech: 'noun' },
    { term: 'Gullible', definition: 'Easily persuaded to believe something; credulous.', partOfSpeech: 'adjective' },

    // H
    { term: 'Hackneyed', definition: '(of a phrase or idea) lacking significance through having been overused; unoriginal and trite.', partOfSpeech: 'adjective' },
    { term: 'Hapless', definition: '(especially of a person) unfortunate.', partOfSpeech: 'adjective' },
    { term: 'Harangue', definition: 'A lengthy and aggressive speech.', partOfSpeech: 'noun' },
    { term: 'Hegemony', definition: 'Leadership or dominance, especially by one country or social group over others.', partOfSpeech: 'noun' },
    { term: 'Hubris', definition: 'Excessive pride or self-confidence.', partOfSpeech: 'noun' },

    // I
    { term: 'Iconoclast', definition: 'A person who attacks cherished beliefs or institutions.', partOfSpeech: 'noun' },
    { term: 'Idiosyncrasy', definition: 'A mode of behavior or way of thought peculiar to an individual.', partOfSpeech: 'noun' },
    { term: 'Impeccable', definition: '(of behavior, performance, or appearance) in accordance with the highest standards of propriety; faultless.', partOfSpeech: 'adjective' },
    { term: 'Impetuous', definition: 'Acting or done quickly and without thought or care.', partOfSpeech: 'adjective' },
    { term: 'Impudent', definition: 'Not showing due respect for another person; impertinent.', partOfSpeech: 'adjective' },
    { term: 'Incisive', definition: '(of a person or mental process) intelligently analytical and clear-thinking.', partOfSpeech: 'adjective' },
    { term: 'Indolent', definition: 'Wanting to avoid activity or exertion; lazy.', partOfSpeech: 'adjective' },
    { term: 'Inept', definition: 'Having or showing no skill; clumsy.', partOfSpeech: 'adjective' },
    { term: 'Infamous', definition: 'Well known for some bad quality or deed.', partOfSpeech: 'adjective' },
    { term: 'Innate', definition: 'Inborn; natural.', partOfSpeech: 'adjective' },
    { term: 'Insatiable', definition: '(of an appetite or desire) impossible to satisfy.', partOfSpeech: 'adjective' },
    { term: 'Insidious', definition: 'Proceeding in a gradual, subtle way, but with harmful effects.', partOfSpeech: 'adjective' },
    { term: 'Intrepid', definition: 'Fearless; adventurous (often used for rhetorical or humorous effect).', partOfSpeech: 'adjective' },
    { term: 'Inveterate', definition: 'Having a particular habit, activity, or interest that is long-established and unlikely to change.', partOfSpeech: 'adjective' },
];
