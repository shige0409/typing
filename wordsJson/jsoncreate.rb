words_len = 100

File.open("common.json", "w") do |f|
    f.puts "{"
    words_len.times do |i|
        f.puts "\"#{i}\":[\"\", \"\"],"
    end
    f.puts "}"
end
