class GamesController < ApplicationController

	def m8
		@question = params['question']
		possible = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', "Don't count on it", 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']
		@answer = possible.sample
	end

	def sn
		@random = (1..10).to_a.sample
		@guess = params['number']
		if @random.to_i == @guess.to_i
			@result = "You win"
		else
			@result = "You lose"
		end
	end

	def rps
	end

	def rock_paper_scissors
		@throw = params[:throw]
		array = ['rock', 'paper', 'scissors']
		random = array.sample
		case 
			when @throw == 'rock' && random == 'rock' then @result = 'Draw. Try again.'
			when @throw == 'rock' && random == 'paper' then @result = 'You lose.'
			when @throw == 'rock' && random == 'scissors' then @result = 'You win.'
			when @throw == 'paper' && random == 'paper' then @result = 'Draw. Try again.'
			when @throw == 'paper' && random == 'rock' then @result = 'You win.'
			when @throw == 'paper' && random == 'scissors' then @result = 'You lose.'
			when @throw == 'scissors' && random == 'scissors' then @result = 'Draw. Try again.'
			when @throw == 'scissors' && random == 'rock' then @result = 'You lose.'
			when @throw == 'scissors' && random == 'paper' then @result = 'You win.'
		end	
	end


end