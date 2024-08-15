// Parse and store the CSV data
const csvString = `Name,Teaching,Evaluation,Behaviour,Internals,Average,Overall
Sanjib Nayak,4,5,5,5, Medium, Good
Hemanta Kallita,4,5,5,5, Medium, Good
Hemanta Kallita,4,5,5,5, Medium, Good
Kumkum,5,4,3,3, High, Medium
Aanjan Kumar,3,4,5,5, Low, Good
Payal Saxena,5,5,5,3, High, Good
Santosh Kumar Tripathy,4,5,5,5, High, Good
Jyothi Aruna,4,4,5,5, High, Good
Navneet Kumar,4,2,3,5, Low, Bad
Abrar Yaqoob,5,5,5,4, Medium, Good
Sajjad Ahmad,5,5,5,5, Low, Good
Pranshu Pranjal,4,4,5,5, Medium, Good
Saurabh Mishra,4,4,5,4, High, Good
Suchismita Patra,3,3,4,4, Low, Good
Juhi Yasmeen,3,4,4,4, Medium, Good
Mayuri Kailas,4,3,4,5, Medium, Good
Avr Mayuri,4,4,3,4, High, Good
Manisha Jain,5,2,3,2, Low;High, Average
Amit Kumar Singh,4,5,4,4, Medium, Good
Suresh Dara,4,4,3,2, High, Bad
Shweta Singh,4,5,4,4, Medium, Good
Humaira Fatima,4,5,5,5, High, Good
Rajeev Saxena,3,5,3,5, High, Good
Jyoti Chauhan,3,2,3,3, Medium, Average;Bad
Sonjoy Pan,3,2,2,2, Medium, Bad
Suresh Babu,5,2,5,4, Low, Good
Ajay Sharma,4,4,5,4, High, Good
Shweta Mukherjee,4,4,4,4, High, Good
Sheerin Kayenat,4,3,4,4, Medium, Good
Ashok Kumar Baral,4,4,4,4, Medium, Good
Priyanka Roy,4,5,5,5, High, Good
Bhumika Choksi,3,2,3,4, Medium, Average
E Prasad,5,2,2,2, High, Average
Monica P,1,1,1,1, Low, Bad
Vairachilli,1,1,1,1, Low, Bad
Harish Chandra,3,5,3,4, Medium, Good
Dipankar Sutradhar,3,3,4,5, Medium, Good
Prashant Kumar Pandey,4,3,2,1, Low, Bad
Sandip Mal,2,2,3,4, Medium, Average
Randeep Singh Payal,3,3,4,2, Low, Average
Ram Kumar,4,3,3,3, Medium, Average
Jp Shritharanaya,3,1,1,2, High, Bad
Pradeep Kumar Kashyap,4,2,3,2, Low;Medium, Average
Ashish Kesarwani,5,3,3,3, Medium, Good
Sanat Jain,3,3,2,5, Low, Average
Chandrama Swain,4,4,4,3, Medium, Average
Juhi Kesarwani,4,5,5,5, High, Good
Manimaran,3,2,4,3, Medium, Average
Govind Prasad Pandya,3,4,5,4, High, Average
Kiran Kumar Behera,4,3,4,4, Low, Good
Narendra Babu,3,2,1,2, Low, Average
Soumya Shankar Ghosh,4,4,4,2, High, Good
Priyank Nema,4,5,4,5, Medium, Good
Pooja Lalwani,5,5,5,5, Medium, Good
Saurabh Kumar Maurya,4,4,4,3, High, Good
Krishna,1,1,1,1, High, Bad
Sangram,1,1,1,1, High, Bad
Saurabh Bhargava,5,4,3,4, Medium, Good
Arindam Sadhukhan,3,5,5,5, Low, Good
Sonal Gupta,4,3,3,2, High, Good
Poulami Gosh,4,1,3,3, Low;Medium, Average
Sonal Trivadi,3,1,1,1, Medium, Bad
Vinod Jatav,5,4,5,4, Medium, Good
Vinod Bhatt,4,4,4,3, Medium, Good
Manoj Aacharya,5,4,4,5, Medium, Average
Pushpdant Jain,5,4,5,5, High, Good
Ankit Pal,3,3,3,3, Low, Average
Piyush,1,1,2,1, Medium, Bad
Nikhil Pateria,4,4,3,4, Medium, Good
L Satish Kumar,2,4,1,5, Medium, Good
Bhakti Parashar,4,4,5,3, Low, Average
Abdul Rashid,4,5,5,5, High, Average
Sharad Chandra Tripathi,3,1,2,2, Low, Bad
Abha Gupta,4,4,4,4, Medium, Average
Abhay Vidyarthi,4,4,5,4, Medium, Good
Abhishek Dilip Joshi,5,4,4,4, Medium, Good
Abhishek Shrivastav,4,5,5,5, Medium, Good
Ajay Kumar Bhurjee,3.5,4,3.5,3.5, Medium, Average
Akshara Makrarya,4,3,4,3, High, Average
Aakash Saxena,4,3,4,3, High, Average
Akshay,3,3,2,3, High, Average
Amit Thakur,3.75,3.25,3.75,4, Medium, Average
Anand Motwani,3.5,4,4.5,4, Low, Average
Anant Kumar Shukla,1,2,2,1.32, Low, Bad
Anil Kumar Shukla,4,3.5,4.5,4, Medium, Average
Anirban Bhowmik,4.125,3.3214,4.0535,3.982, Low, Average
Anita Yadav,3.35,4.65,4.5,4.15, Medium, Average
Ankur Beohar,4,4,4,4, High, Average
Arindam Ghosh,2,2,2,3, Medium, Bad
Arpita Banoria,4,5,4,5, High, Good
Ashish Tripathi,4,5,4,4, High, Good
Atul Aman,2,5,5,5, High, Average
Avirup Das,3,4,4,4, Medium, Average
Baseera A,3,4,5,5, High, Average
Benevatho Jaison A,4.8,4,5,4, Medium, Good
Bhavana Bagherwal,4.6,4.2,4.2,4, Medium, Good
Deep Chandra Uphadhya,2,4,4,4, Medium, Average
Dev Brat Gupta,2,2.33,3,2, Medium, Bad
Devaraju S,4,3,4.5,4, Medium, Average
Devraj Vishnu,3,5,4,5, High, Good
Dheeresh Soni,3.66,4.33,5,4.33, Medium, Good
Divya Haridas,4.5,4.83,4.83,4.83, High, Good
Divya Thakur,3,5,5,4, High, Good
Dondu Harish,2,3,3,3, Low, Average
E Nirmala,4,5,5,4, High, Good
G Prabhu Kannan,2,3,4,3.5, Medium, Average
G R Hemlakshmi,3,2,5,4, Medium, Average
G.L Balaji,5,5,5,4, Medium, Good
Gopal Singh Tandel,5,5,4,4, High, Good
Hariharan R,4,4,4,4, High, Good
Hemlatha Gangwar,2,4,5,5, Medium, Average
Javed Khan Sheikh,2,3,3,3.5, Medium, Average
Jitendra Parmar,4,4,5,5, Medium, Good
Jp Shritharanya,2.5,3,2.5,3, High, Average
K Pallavi,5,5,4,5, Medium, Good
Karishma Tiwari,2.75,2.75,3,3, Medium, Average
L Sathish Kumar,2,2.33,2,2.66, Medium, Bad
Lokesh Malviya,1.66,4,4,4.66, Medium, Average
M Suresh,2.66,2.33,3.66,3, High, Average
M.R Thiyagu Priyadarshan,2,2,3,2, Low, Average
Mamta Agarwal,3.5,3.5,4.5,3.5, Medium, Average
Manickam A,3,4,5,5, Medium, Good
Manisha,4,4,4,5, High, Good
Manorma Chauhan,4,4,5,4, Medium, Good
Mayank Gupta,4,4,5,5, High, Good
Mayank Sharma,4.66,3.33,4.33,4.33, Medium, Good
Mohammad Sultan Alam,2,3.33,3.66,3.33, Medium, Average
Nafisa Hussain,2,2,1,3, Low, Bad
Navneet Verma,5,5,5,4, Medium, Good
Neha Choubey,5,3,4,5, Medium, Good
Nilam Venkateshwarao,2,1,1,2, Low, Bad
Nilamadhab Mishra,3,2,3,2, Low, Average
Palash Jain,4,2,3,4, Low, Average
Pallavi,4,1,2,1, Low, Bad
Pavan Mehta,1,1,4,1, Medium, Bad
Pooja,3,3,4,3, Medium, Average
Poonkundran,4,4.5,5,4.5, High, Good
Pr Bhuvaneshwai,4,4,4,3, Medium, Average
Prabhu M,4,5,5,4, Medium, Good
Pradeep,3,5,5,5, Medium, Good
Pradeep Kumar Mishra,2.66,2.33,2.66,2.33, Medium, Bad
Pranjali Malviya,2.66,1.33,1.66,2.66, Low, Bad
Praveen Kumar Lalwani,3.2,3.2,3.8,3.8, Medium, Average
R.P. Sugavaneshwar,5,5,5,5, High, Good
Rabia Musheer,3.2,3.2,3.2,4, Medium, Average
Rahul Kumar Chaturvedi,5,5,5,5, Medium, Good
Rajdeep Ghosh,5,5,5,4, Medium, Good
Rajit Nair,3.375,3.5,4.75,3.375, Medium, Average
Ramesh Saha,2,2,4,5, Low, Bad
Ranjitha Kumar,4,4,4,4, Medium, Good
Ranju Yadav,3.5,2,4.5,3, Medium, Average
Reena Jain,1,1,1,1, Low, Bad
Ribu Mathew,3,4,5,5, Medium, Good
Rouf Khan,5,4,5,3, Medium, Good
S Devaraju,4.75,4.5,4.75,4.25, Medium, Good
S. Sarvanan,5,5,5,4, Medium, Good
Sadanand Singh,2.5,3.5,3,4, Medium, Average
Sana Afreen,3.5,3.25,2,3.5, Medium, Average
Satyam Ravi,3,5,4.5,4, Medium, Good
Saurav Prasad,2,2.33,2.33,2.66, Low, Bad
Sayed Mohammad Zeeshan,4,4,5,4, Medium, Good
Shahid Abdullah,5,4.5,5,5, High, Good
Sharmila Joseph,3,1,2,3, Medium, Average
Shiju E,5,5,5,4.5, Medium, Good
Shilpa Suman,2,2,3,3.5, Medium, Average
Shweta Saxena,5,5,5,5, High, Good
Siddharth Singh Chouhan,2.75,3,4.25,3.5, Medium, Average
Soma Saha,1,3,1,2, Medium, Bad
Sonali Shrivastav,3,3,3.25,3.25, Medium, Average
Sonam Goswami,4,3.5,44.5,4, Medium, Good
Subhash Chandra Bose J,4,4,4,4, Medium, Good
Suchetna Sadhukhan,2.14,2,3.28,3.28, Medium, Average
Sugavaneshwar RP,3,4.33,4.33,4.33, Low, Average
Sumit Mittal,4.2,4.6,4.8,4.2, Medium, Good
Swati Chauhan,3,1,2,1, Low, Bad
S. Periyanagi,5,4,3,3, Medium, Good
Thiyagu,5,5,5,5, High, Good
Ujjwal Kumar Mishra,3.5,2.5,3,3, Low, Bad
Vijay Kumar Patel,1,1,1,1, Low, Bad
Vijay Kumar Trivedi,3.5,4.5,4,4, Medium, Good
Vinod Kumar,4,4,5,4, Medium, Good
Vipin Jain,3,4,4.5,4.5, Medium, Good
Virendra Singh Kushwaha,2.33,3.33,4,4, High, Average
Yogesh Shukla,3.25,2.5,2.5,2.25, Medium, Average
Yogita Dwivedi,4,4,3.5,4.5, Medium, Good
D.S Devraju,4,3,5,4, Medium, Good
Hemant Nashine,4,3,3,3, Medium, Average
Bhavana Bhagerwal,4,4,4.5,3.75, Medium, Good
Kk Nair,5,4,5,4, Medium, Good
Siddharth K.V,3,2,2,2, Low, Bad
Sandeep Sahu,3,4,5,4, Medium, Good
Akshay Jadav,5,4,5,5, Medium, Good
Uday Kumar,3,4,5,4, Low, Good
Sughvanewshar Ramu Pasupathi,3,5,4,4, Medium, Good
Deepankar Sutradhar,3,5,4.5,5, High, Good
S Saravanan,4,5,4,4, High, Good
R.P Sugavaneshwar,2,1,1,2, Low, Bad
Santosh Kumar Bhal,3,3,3,4, Medium, Average`; // Include the full CSV data here

const facultyData = parseCsvData(csvString);

// Store the parsed data in chrome.storage
chrome.storage.local.set({facultyData: facultyData}, function() {
  console.log('Faculty data stored');
});

function parseCsvData(csvString) {
  const lines = csvString.split('\n');
  const headers = lines[0].split(',');
  return lines.slice(1).map(line => {
    const values = line.split(',');
    return headers.reduce((obj, header, index) => {
      obj[header.trim()] = values[index].trim();
      return obj;
    }, {});
  });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getFacultyRatings") {
    chrome.storage.local.get('facultyData', function(data) {
      const matches = findMatchingFaculty(request.selectedText, data.facultyData);
      sendResponse({matches: matches});
    });
    return true; // Indicates that the response is sent asynchronously
  }
});

function findMatchingFaculty(selectedText, facultyData) {
  const lowerSelectedText = selectedText.toLowerCase();
  return facultyData.filter(faculty => 
    faculty.Name.toLowerCase().includes(lowerSelectedText)
  );
}